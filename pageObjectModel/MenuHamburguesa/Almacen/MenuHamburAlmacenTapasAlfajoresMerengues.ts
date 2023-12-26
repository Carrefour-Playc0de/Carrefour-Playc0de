import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenTapasAlfajoresMerengues extends BasePage {

    readonly TAPAS_ALFAJORES_MERENGUES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TAPAS_ALFAJORES_MERENGUES = this.page.locator('//a [@id="menu-item-category-tapas-alfajores-merengues"]')
    }

    async clickAlmacenTapasAlfajoresMerengues(): Promise<void> {
        await this.click(this.TAPAS_ALFAJORES_MERENGUES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenTapasAlfajoresMerengues(): Promise<void> {
        await this.clickAlmacenTapasAlfajoresMerengues()
    }
}
