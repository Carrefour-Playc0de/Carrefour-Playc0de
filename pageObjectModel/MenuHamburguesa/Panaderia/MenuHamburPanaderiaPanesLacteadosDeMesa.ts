import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPanaderiaPanesLacteadosDeMesa extends BasePage {

    readonly PANES_LACTEADOS_DE_MESA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PANES_LACTEADOS_DE_MESA = this.page.locator('//a [@id="menu-item-category-panes-lacteados-mesa"]')
    }

    async clickPanaderiaPanesLacteadosDeMesa(): Promise<void> {
        await this.click(this.PANES_LACTEADOS_DE_MESA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPanaderiaPanesLacteadosDeMesa(): Promise<void> {
        await this.clickPanaderiaPanesLacteadosDeMesa()
    }
}
