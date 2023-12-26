import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilMuniecosMuniecas extends BasePage {

    readonly MUNIECOS_MUNIECAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MUNIECOS_MUNIECAS = this.page.locator('//a [@id="menu-item-category-muñecos-muñecas"]')
    }

    async clickBazarTextilMuniecosMuniecas(): Promise<void> {
        await this.click(this.MUNIECOS_MUNIECAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilMuniecosMuniecas(): Promise<void> {
        await this.clickBazarTextilMuniecosMuniecas()
    }
}
